import React from 'react'

import {myid} from '@/app/mydata/datastore'

export async function generateStaticParams() {
    return myid.map((id)=>({
        id,
    }));
    
}

function DepartmentPage({params}) {
    console.log(params);
  return (
    <div>
      this is a deparment page
    </div>
  )
}

export default DepartmentPage
