import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
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
                <Route exact path='/' render={(props)=> <ShowSubscribers{...props} subscribersList={this.state.subscribersList} />} />
                <Route exact path='/add' render={({history},props)=> <AddSubscriber history={history}{...props} addSubscriberHandler={this.addSubscriberHandler} />} />            
                </div>
                </Router>
            //<AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
            //<ShowSubscribers subscribersList={this.state.subscribersList}/>
        )
    }
}
export default PhoneDirectory;