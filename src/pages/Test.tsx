import { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';

export const Test = () => {
  const [index,setIndex] = useState()
  const [array,setArray] = useState()

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
        connection.invoke('InsertionSort', [5, 3, 2, 4, 7, 8, 1, 0, 9, 6])
          .catch(err => console.error('Error invoking BubbleSort 123', err));
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
      <p>Array: {array}</p>
    </div>
  )
}