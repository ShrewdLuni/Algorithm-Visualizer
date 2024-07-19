import { Sidebar } from "@/components/Sidebar"

import { useEffect, useRef, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { TestChart } from '@/components/TestChart';


export const SortingPage = () => {

  const [isActiveSettings,setIsActiveSettings] = useState(true)
  const [isActiveMethods,setIsActiveMethods] = useState(true)
  const [activeMethod,setActiveMethod] = useState("BubbleSort")

  let sidebarItems =  [
    {label:"BubbleSort"},
    {label:"InsertionSort"},
    {label:"HeapSort"},
    {label:"QuickSort"},
    {label:"MergeSort"},
    {label:"BucketSort"},
  ]

  const [elementsCount,setElementsCount] = useState(100)
  const [delay,setDelay] = useState(20)

  const connectionRef = useRef<signalR.HubConnection | null>(null)
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);

  const [index,setIndex] = useState(0)
  const [array,setArray] = useState<number[]>([
    7,1,2,3,4,5,6
  ])

  useEffect(() => {
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

      connection.on('SortStep', (arr: number[], index: number) => {
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

    startConnection();

    // Cleanup connection on component unmount
    return () => {
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

      stopConnection();
    };
  }, [delay]);
  
  const invokeSort = () => {
    if(!connectionRef.current || !isConnected){
      console.error("Connection is not established");
      return;
    }

    connectionRef.current.invoke('InsertionSort',array,delay).catch(err => console.error("Error in invokeSort method",err))
  }

  return (
    <div className="flex flex-row">
      <Sidebar 
        sidebarItems={sidebarItems} 
        isActiveSettings={isActiveSettings} 
        setIsActiveSettings={setIsActiveSettings} 
        isActiveMethods={isActiveMethods} 
        setIsActiveMethods={setIsActiveMethods} 
        activeMethod={activeMethod} 
        setActiveMethod={setActiveMethod}

        elementsCount={elementsCount}
        setElementsCount={setElementsCount}
        delay={delay}
        setDelay={setDelay}

        onStart={invokeSort}
      />
      <div className="w-full h-screen flex flex-col text-black bg-black items-center justify-center py-24 px-2">
        <TestChart array={array != undefined ? array : []} currentIndex={index != undefined ? index : 0}/>
      </div>
    </div>
  )
}