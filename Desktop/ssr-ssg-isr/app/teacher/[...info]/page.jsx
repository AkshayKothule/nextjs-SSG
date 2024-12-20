import React from 'react'
import { teacherdata } from '@/app/mydata/datastore';



export async function generateStaticParams(){
    return teacherdata.map((data)=>({
        info : data.info ,
    }))
}

function TeacherPage({params}) {
    console.log(params);
    
  return (
    <div>
      this is teacher page
    </div>
  )
}

export default TeacherPage
