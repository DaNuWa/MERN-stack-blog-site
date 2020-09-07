import React, { Component } from 'react'
import  '../Admin/dashboard.css'
import Createpost from './Createpost'
import Viewpost from './Viewposts'
import Updatepost from './Updatepost'
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            status:'update'
        }
    }
    
    createpostHandler=()=>
   {
        this.setState({status:'create'})
   }
   viewepostHandler=()=>
   {
        this.setState({status:'view'})
   }
    render() {
        let current=null;
        if (this.state.status==='create') {
            current=<Createpost/>
        }
        if(this.state.status==='view')
        {
            current=<Viewpost/>
        }
        if(this.state.status==='update')
        {
            current=<Updatepost/>
        }
        return (
            <div>
                <nav className="navbar2">
                    <a className="navbar-brand" href="#">
                <div className="icon-container">
                    <img className="icon hexagon" />
                </div>
                <span className="name">Financial CRM</span>
            </a>
                    <ul className="navbar-nav">
                <li>
                    <a className="active"><img className="icon home" /><span>View Posts</span></a>
                </li>
                <li>
                    <a><img className="icon statistics" /><span>New Post</span></a>
                </li>
                <li>
                    <a><img className="icon mail" /><span>Edit Post</span></a>
                </li>
                <li>
                    <a><img className="icon user" /><span>New category</span></a>
                </li>
            
            </ul>
                    <div className="navbar-footer">
                <img className="image-documents" src="https://ozcanzaferayan.github.io/financial-crm/img/documents.svg" alt="documents" />
            
            </div>
                </nav>
                <main>
                    <div className="charts-wrapper">
                {current}
            </div>
                </main>
         </div>)
    }
}
