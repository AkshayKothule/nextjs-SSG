import React from 'react'

import { collegedata } from '@/app/mydata/datastore';



export async function generateStaticParams1(){
    return collegedata.map((data)=>({
        dept : data.dept,
        id : data.id
    }))

}

function CollegePage({params}) {
    console.log(params);
    
  return (
    <div>
      this is college page
    </div>
  )
}

export default CollegePage
