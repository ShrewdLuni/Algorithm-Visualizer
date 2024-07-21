import * as signalR from '@microsoft/signalr';

import { useEffect, useRef, useState } from 'react';

import { ArrayVisualization } from '@/components/ArrayVisualization';
import { Sidebar } from "@/components/Sidebar"

export const SortingPage = () => {

  const [isActiveSettings,setIsActiveSettings] = useState(true)
  const [isActiveMethods,setIsActiveMethods] = useState(true)
  const [activeMethod,setActiveMethod] = useState("BubbleSort")

  let sidebarItems =  [
    {label:"BubbleSort"},
    {label:"InsertionSort"},
    {label:"QuickSort"},
    {label:"MergeSort"},
    {label:"HeapSort"},
    {label:"RadixSort"},
    {label:"CocktailSort"},
    {label:"SelectionSort"},
    {label:"CountSort"},
  ]

  const [elementsCount,setElementsCount] = useState(100)
  const [delay,setDelay] = useState(20)
  
  const connectionRef = useRef<signalR.HubConnection | null>(null)

  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);

  const [index,setIndex] = useState(0)
  const [array,setArray] = useState<number[]>([...Array(elementsCount).keys()])

  const startConnection = async () => {
    if (connectionRef.current || isConnecting) return;

    setIsConnecting(true);

    const connection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7134/sort', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .build();

    connection.on('SortStep', (arr, index) => {
      setIndex(index);
      setArray(arr);
    });


    connection.on('SortComplete', () => {
      console.log('Sorting Complete');
    });

    try {
      await connection.start();
      console.log('Connected to SignalR hub');
      setIsConnected(true);
    } catch (err) {
      console.error('Error connecting to SignalR hub', err);
    } finally {
      setIsConnecting(false);
    }

    connectionRef.current = connection;
  };

  const stopConnection = async () => {
    if (isConnecting || !connectionRef.current) return;

    try {
      await connectionRef.current.stop();
      console.log('Disconnected from SignalR hub');
      connectionRef.current = null;
      setIsConnected(false);
    } catch (err) {
      console.error('Error disconnecting from SignalR hub', err);
    }
  };

  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if(debounceTimeout.current){
      clearTimeout(debounceTimeout.current)
    }

    debounceTimeout.current = setTimeout(() => {
      startConnection()
    }, 500)

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      stopConnection();
    };
  }, [delay, elementsCount]);
  
  const InvokeSort = () => {
    if(!connectionRef.current || !isConnected){
      console.error("Connection is not established");
      return;
    }

    connectionRef.current.invoke(activeMethod, array, delay).catch(err => console.error(activeMethod,err))
  }

  const InvokeStop = () => {
    if(!connectionRef.current || !isConnected){
      console.error("Connection is not established");
      return;
    }
    connectionRef.current.invoke('Cancel').then(() => console.log("Cancel invoked")).catch(err => console.error("Error in invokeSort method",err))
  }

  const InvokeShuffle = () =>{
    if(!connectionRef.current || !isConnected){
      console.error("Connection is not established");
      return;
    }

    connectionRef.current.invoke('Shuffle',array,delay).catch(err => console.error("Error in invokeSort method",err))
  }

  const sidebarProps = {
    sidebarItems,
    isActiveSettings,
    setIsActiveSettings,
    isActiveMethods,
    setIsActiveMethods,
    activeMethod,
    setActiveMethod,
    elementsCount,
    setElementsCount: (value: number) => {
      setElementsCount(value);
      setArray([...Array(value).keys()]);
    },
    delay,
    setDelay,
    isConnected,
    isConnecting,
    onStart: InvokeSort,
    onStop: InvokeStop,
    onShuffle: InvokeShuffle
  };

  return (
    <div className="flex flex-row">
      <Sidebar {...sidebarProps}/>
      <ArrayVisualization array={array || []} currentIndex={index || 0}/>
    </div>
  )
}