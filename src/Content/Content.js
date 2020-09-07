import React from 'react'
import uuid from 'uuid';
const MyContext = React.createContext();

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            datas:[
                {id:1,title:"Title",description:"lorem ipsun dolor sit aner",created_at:'2020-01-25',owner:"yohan"},
                {id:2,title:"Title",description:"lorem ipsun dolor sit aner",created_at:'2020-01-25',owner:"yohan"}
                 ]
                }
            }
            
    createPost=()=>
        {
            let tempdata=[...this.state.datas,{id:uuid(),title:"Title",description:"lorem ipsun dolor sit aner",created_at:'2020-01-25',owner:"yohan"}];
            this.setState({
                datas:tempdata,
            })
        }
    render()
    {   
    return (
        <MyContext.Provider value={{...this.state,createpost:this.createPost}}>
           {this.props.children}
        </MyContext.Provider>
    )
    }
}

const ContextConsumer=MyContext.Consumer;
export {Content,ContextConsumer};
