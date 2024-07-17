import { Sidebar } from "@/components/Sidebar"

import { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { TestChart } from '@/components/TestChart';


export const SortingPage = () => {
  const [index,setIndex] = useState()
  const [array,setArray] = useState<number[]>([
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
        connection.invoke('MergeSort', array)
          .catch(err => console.error('Error invoking InsertionSort 123', err));
      })
      .catch(err => console.error('Error connecting to SignalR hub 321', err));

    // Cleanup connection on component unmount
    return () => {
      connection.stop().catch(err => console.error('Error disconnecting from SignalR hub', err));
    };
  }, []);
  
  return (
    <div className="flex flex-row">
      <Sidebar/>
      <div className="w-full h-screen flex flex-col text-black bg-black items-center justify-center py-24 px-2">
        <TestChart array={array != undefined ? array : []} currentIndex={index != undefined ? index : 0}/>
      </div>
    </div>
  )
}