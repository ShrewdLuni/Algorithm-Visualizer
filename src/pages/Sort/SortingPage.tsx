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

  const [index,setIndex] = useState()
  const [array,setArray] = useState<number[]>([
    7,1,2,3,4,5,6
  ])

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7134/sort',{
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .withAutomaticReconnect()
      .build(); 

    connection.on('SortStep', (arr, index) => {
      setIndex(index)
      setArray(arr)
    });

    connection.on('SortComplete', () => {
      console.log('Sorting Complete');
    });

    connection.start()
      .then(() => {
        console.log('Connected to SignalR hub');
        connection.invoke('MergeSort', array,delay)
         .catch(err => console.error('Error invoking', err));
      })
      .catch(err => console.error('Error connecting to SignalR hub', err));

    // Cleanup connection on component unmount
    return () => {
      connection.stop().catch(err => console.error('Error disconnecting from SignalR hub', err));
    };
  }, [delay]);
  
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
      />
      <div className="w-full h-screen flex flex-col text-black bg-black items-center justify-center py-24 px-2">
        <TestChart array={array != undefined ? array : []} currentIndex={index != undefined ? index : 0}/>
      </div>
    </div>
  )
}