import React, {Component} from 'react';
import AddSubscribers from './AddSubscribers';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state={
            subscribersList:[{
                id:1,
                name:'Paro',
                phone:'8083988494'
            },
            {
            id:2,
            name:'push',
            phone:'100'
            
            }]
        }

    }
    deleteSubscriberHandler =(subscriberId)=>{
        let subscribersList=this.state.subscribersList;
        let subscriberIndex=0;
        subscribersList.forEach(function(subscriber,index){
            if(subscriber.id==subscriberId){
                subscriberIndex=index;
            }
        
        },this);
        let newSubscribers=subscribersList;
        newSubscribers.splice(subscriberIndex,1);
        this.setState({subscribers:newSubscribers});
    }
    addSubscriberHandler=(newSubscriber) => {
        let subscribersList=this.state.subscribersList;
        if(subscribersList.length>0){
            newSubscriber.id= subscribersList[subscribersList.length-1].id+1;
                }
                else{
                    newSubscriber.id=1;
                }
                subscribersList.push(newSubscriber);
                this.setState({subscribersList: subscribersList});
              

    }
    render(){
        return(
            <Router>
                <div>
                <Route exact path='/' render={(props)=> <ShowSubscribers{...props} subscribersList={this.state.subscribersList}  deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
                <Route exact path='/add' render={({history},props)=> <AddSubscribers history={history}{...props} addSubscriberHandler={this.addSubscriberHandler} />} />            
                </div>
                </Router>
            //<AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
            //<ShowSubscribers subscribersList={this.state.subscribersList}/>
        )
    }
    }
export default PhoneDirectory;