import React from 'react';
import Table1 from './table1';


class Table extends React.Component{
	state={users:[]}
	componentDidMount(){
    this.fetchUsers()
    }
    fetchUsers=async()=>{
	    const url="https://api.randomuser.me/?results=4"
	    const response=await fetch(url);
	    const data=await response.json();
	    console.log(data.results);
	    this.setState({users:data.results})
   }
	render(){
		return(
			<div className="padded-section">
				<div class="row">
					<div class="col-lg-6 col-md-6">
						<Table1 users={this.state.users}/>
					</div>
					<div class="col-lg-6 col-md-6">
						<div class="col">
							<Table1 users={this.state.users}/>
							<Table1 users={this.state.users}/>
							<Table1 users={this.state.users}/>
							<Table1 users={this.state.users}/>
						</div>
					</div>
					
					

				</div>
			</div>
			)
	}
}
export default Table