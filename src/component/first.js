// import React, { Component } from 'react';

// export default class componentName extends Component {
//   render() {
//     return (
//       <div> textInComponent </div>
//     );
//   }
// }

import React, { Component } from 'react'
// import {ReactTable,  data, columns} from 'react-table';
//import ReactTable from 'react-table';
//import { log } from 'util';
import './Nav.css';


export default class Dtable extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tableData : []
        }
    }
    componentDidMount () {
        const url = "http://boxigo.in/sampleAPI.php";
        fetch(url)
        .then(data => data.json())
        .then(data => {
            console.log(data);
        
            this.setState({
                tableData: data.Customer_Estimate_Flow
            })
            console.log("from api ",this.state.tableData);
        })
    }

    render() {
        return (
            <div className="mb-3"> 
                <div className=" container card" id="box">
                {                     
                    this.state.tableData.map((value) => {
                        return(
                            <div id = {value.estimate_id}>
                                <div className="card">
                                    <div className="card"> 
                                        <div class="row" id="text">
                                            <div class="col-md-3">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                    <a href="#"><u>{value.user_id}</u></a>
                                                    
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-3"><br></br>
                                                        <i class="fas fa-home" id="icon"></i>
                                                    </div><br></br>
                                                    <div class="col-md-6"><br></br>
                                                        <p id="msg">House<br></br>{value.property_size}</p>                       
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">Order Date:  {value.date_created}</div>
                                                </div>
                                            </div>
                                            <div class="col-md-6" >
                                                <div class="row" id="city">
                                                    <div class="col-md-3">
                                                        <div  class="row" id="city">{value.select_city}</div>
                                                        <div  class="row" id="moving">{value.moving_from}</div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div  class="row">
                                                            <div class="col-md-1"></div>
                                                            <div class="col-md-8" id="moving">{value.date_created}</div>
                                                            <div class="col-md-3"></div>
                                                        </div>
                                                        <div  class="row">
                                                            <div class="col-md-6"><hr id="img"></hr></div>
                                                            <div class="col-md-2"></div>
                                                            <div class="col-md-1"><i class="fas fa-play" id="arrow"></i></div>
                                                            <div class="col-md-3"></div>
                                                            {/* <img src={require('./image/arrow.png')} alt="Cinque Terre" id="img"></img> */}
                                                        </div>
                                                        <div  class="row">
                                                        <div class="col-md-1"></div>
                                                            <div class="col-md-8">
                                                            <button type="button" class="btn btn-primary" data-toggle="collapse" data-target={"#"+value.estimate_id}>
                                                                View More Deatils
                                                            </button>
                                                            </div>
                                                            <div class="col-md-3"></div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-3">
                                                    <div class="row" id="moving">{value.city_type}</div>
                                                    <div class="row" id="moving">{value.moving_to}</div>
                                                    
                                                    </div>   
                                                </div>
                                            </div>
                                            {/* <div class="col-md-6">{value.moving_from}</div> */}
                                            <div class="col-md-3" >
                                                <div class="row" >
                                                    <div class="col-md-4"></div>
                                                    <div class="col-md-8" id="test2">{value.custom_status}</div>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div id={value.estimate_id} class="collapse">
                                        <div className="card">
                                            <div class="row">
                                                <div class="col-md-8 " id="view">Items Details</div>
                                                <div class="col-md-4 " id="view2"><a href="#">Edit</a></div>
                                            </div><br></br>
                                            <div class="row">
                                                <div class="col-md-6 ">
                                                    <input type="text" value="Living Room" id="menu"></input>
                                                    <div class="row">
                                                        <div class="col-md-2" id="liv">
                                                        {value.items.rooms.living_room.center_table}
                                                        <p>Center Table</p>
                                                        </div>
                                                        <div class="col-md-2" id="liv">
                                                        {value.items.rooms.living_room.computer_table}
                                                        <p>Computer Table</p>
                                                        </div>
                                                        <div class="col-md-2" id="liv">
                                                        {value.items.rooms.living_room.foldable_chair}
                                                        <p>Foldable Chair</p>
                                                        </div>
                                                        <div class="col-md-2" id="liv">{value.items.rooms.living_room.side_table}
                                                        <p>Side Table</p>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                <input type="text" value="Others" id="menu"></input>
                                                    <div class="row">
                                                        <div class="col-md-2" id="liv">
                                                        {value.items.rooms.others.television}
                                                        <p>Television</p>                                                            
                                                        </div>
                                                        <div class="col-md-2" id="liv">
                                                        {value.items.rooms.others.fan}
                                                        <p>Fan</p>
                                                        </div>
                                                        <div class="col-md-2" id="liv">
                                                        {value.items.rooms.others.tv_cabinet}
                                                        <p>Tv Cabinet</p>
                                                        </div>
                                                        <div class="col-md-2" id="liv">
                                                        {value.items.rooms.others.home_theater}
                                                        <p>Home Theater</p>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                    <div class="col-md-6 ">
                                                        <input type="text" value="Bed Room" id="menu"></input>
                                                        <div class="row">
                                                            <div class="col-md-2" id="liv">
                                                             {value.items.rooms.bed_room.sofa_2_seater}
                                                             <p>Sofa2Seater</p> 
                                                            </div>
                                                            <div class="col-md-2" id="liv">
                                                            {value.items.rooms.bed_room.plastic_chair}
                                                            <p>Plastic Chair</p>
                                                            </div>
                                                            <div class="col-md-2" id="liv">
                                                            {value.items.rooms.bed_room.study_table}
                                                            <p>Study Table</p>
                                                            </div>
                                                            <div class="col-md-2" id="liv">
                                                            {value.items.rooms.bed_room.computer}
                                                            <p>Computer</p>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                            </div>

                                             <div class="row">
                                                    <div class="col-md-6 ">
                                                        <input type="text" value="Kitchen" id="menu"></input>
                                                        <div class="row">
                                                            <div class="col-md-2" id="liv">
                                                            {value.items.rooms.kitchen.center_table}
                                                            <p>Center Table</p> 
                                                            </div>
                                                            <div class="col-md-2" id="liv">
                                                            {value.items.rooms.kitchen.computer_table}
                                                            <p>Computer Table</p>
                                                            </div>
                                                            <div class="col-md-2" id="liv">
                                                            {value.items.rooms.kitchen.foldable_chair}
                                                            <p>Foldable Chair</p>
                                                            </div>
                                                            <div class="col-md-2" id="liv">
                                                            {value.items.rooms.kitchen.home_theater}
                                                            <p>Home Theater</p>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                             </div>

                                             <div className="card">
                                            
                                                <div class="row">
                                                    <div class="col-md-2 ">
                                                    <input type="text" value="Detail of Existing House"></input>
                                                    </div>
                                                    <div class="col-md-2 " id="di">
                                                    <level>Floor No </level> {value.old_floor_no}
                                                    </div>
                                                                                                    
                                                    <div class="col-md-2 ">
                                                    <level>Elevator</level>  
                                                    <input type="text" value={value.old_elevator_availability} id="footer"></input>
                                                    </div>
                                                    <div class="col-md-2 ">
                                                    <level>Parking</level>
                                                    <input type="text" value={value.packing_service} id="footer"></input>
                                                    </div>
                                                    <div class="col-md-4 ">
                                                    <level>Approx Distrance Door to Truck Parking</level>
                                                    <input type="text" value={value.old_parking_distance} id="footer"></input>
                                                    </div>
                                                </div>  
                                                <br></br>
                                                <div class="row">
                                                    <div class="col-md-2 ">
                                                    <input type="text" value="Detail of New House"></input>
                                                    </div>
                                                    <div class="col-md-2 " id="di">
                                                        <level>Floor No</level>  {value.new_floor_no}
                                                    </div>
                                                                                                    
                                                    <div class="col-md-2 ">
                                                    <level>Elevator</level> 
                                                    <input type="text" value=  {value.new_elevator_availability} id="footer"></input>
                                                    </div>
                                                    <div class="col-md-2 ">
                                                    <level>UnParking</level> 
                                                    <input type="text" value=  {value.unpacking_service} id="footer"></input>
                                                    </div>
                                                    <div class="col-md-4 ">
                                                    <level>Approx Distrance Door to Truck Parking</level> 
                                                    <input type="text" value= {value.new_parking_distance} id="footer"></input>
                                                    </div>
                                                </div>      
                                                        
                                                    
                                                                                
                                                    <br></br>
                                                    <div class="text-center">
                                                        <button type="button" class="btn btn-primary" id="btn">Back to My Move Plan</button>
                                                    </div>
        

                                            </div>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    }
                    <p>{}</p> 
                </div>
                {/* <Chart chartdata = {this.state.tableData}/> */}
            </div> 
        )
    }
}