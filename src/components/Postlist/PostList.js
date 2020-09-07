import React from 'react';
import Post  from './Post'
import Fullpost  from './Fullpost'
import Sidebar from '../sidebar/Sidebar'
import {ContextConsumer}  from '../../Content/Content'

const PostList = () => {
 return (
      <ContextConsumer>
        {
          value=>
          { 
           const {datas,createpost}=value
           console.log(value);
           return <>
                    <br/>
                    <br/>
                    <div className="container" >
                      <button onClick={createpost}>click me</button>
                      <div className="row ">
                        <div className="col-md-8">
                          <h1 className="my-4">Page Heading<small>Secondary Text</small>
                          </h1>
                          {
                           datas.map((data)=>{
                            return <Post key={data.id} data={data}/>
                           })
                          }
                        </div>
                        <Sidebar/>
                       </div>      
                    </div>
                  </>
          } 
        }
       </ContextConsumer>);
}

export default PostList;
