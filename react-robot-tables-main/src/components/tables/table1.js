import React from 'react';

class Table1 extends React.Component{
	render(){
		return(
			<div class="card">
				<div class="card-header text-white bg-info"><i class="fas fa-table mr-1"></i><b>Sample Table</b></div>
		      <div class="card-body">


		        <div class="table-responsive">
		            <table class="table">
		                <thead>  
							<tr>
								<th>Name </th>
								<th>Email</th>
								<th>Phone</th>
								<th>City</th>
	                    	</tr>
		                  </thead>
		                  <tbody>
		                  {this.props.users.map((user=>{
		                  	return(
			                  		<tr>
			                  			<td>{user.name.first}</td>
			                  			<td>{user.email}</td>
			                  			<td>{user.phone}</td>
			                  			<td>{user.location.city}</td>
			                  		</tr>
			                  		
		                  		)
		                  }))}
		                  </tbody>
		            	</table>
		            </div>


		          </div>
		         
		      </div>
			)
	}
}
export default Table1