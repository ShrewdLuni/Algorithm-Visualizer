import { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { TestChart } from '@/components/TestChart';

export const Test = () => {
  const [index,setIndex] = useState()
  const [array,setArray] = useState<number[]>()

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
        connection.invoke('InsertionSort', [5,6,7,1,5,4,3,2,9,0])
          .catch(err => console.error('Error invoking InsertionSort 123', err));
      })
      .catch(err => console.error('Error connecting to SignalR hub 321', err));

    // Cleanup connection on component unmount
    return () => {
      connection.stop().catch(err => console.error('Error disconnecting from SignalR hub', err));
    };
  }, []);


  return (
    <div>
      <h1>SignalR Chat</h1>
      <p>Index: {index}</p>
      <TestChart array={array != undefined ? array : []} currentIndex={index != undefined ? index : 0}/>
    </div>
  )
}