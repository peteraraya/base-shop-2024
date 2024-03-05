
// Recibimos nuestras props

import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}



export default function Category({ params }: Props) {

  // Mostramos el id que nos llega por parámetro
  const { id } = params;

  
  if( id === 'kids') {
    notFound();
  }

  return (
    <div>
      <h1>Category Page  {id}</h1>
    </div> 
  );
}