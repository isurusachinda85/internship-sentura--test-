import {Component} from "react";
import {Button, TextField} from "@mui/material";

export class UserForm extends Component {
    render() {
        return (
            <div className="flex flex-wrap flex-col items-center w-full h-dvh p-5 ">
                <div className="flex flex-wrap flex-col items-center w-1/2 h-full shadow-2xl">

                    <div className="flex justify-center items-center w-full p-4">
                        <h1 className="text-4xl font-bold text-blue-700">User Contact</h1>
                    </div>

                    <div className="flex flex-col  items-center justify-around  h-4/5 w-full">
                        <TextField className="w-1/2"
                                   id="outlined-basic"
                                   label="Id"
                                   variant="outlined"
                                   type="text"
                                   name="id"
                                   /*value={this.state.id}
                                   onChange={this.handleMessageInputOnChange}*/

                        />

                        <TextField className="w-1/2"
                                   id="outlined-basic"
                                   label="Name"
                                   variant="outlined"
                                   type="text"
                                   name="name"
                                   /*value={this.state.name}
                                   onChange={this.handleMessageInputOnChange}*/

                        />

                        <TextField className="w-1/2"
                                   id="outlined-basic"
                                   label="Address"
                                   variant="outlined"
                                   type="text"
                                   name="address"
                                   /*value={this.state.address}
                                   onChange={this.handleMessageInputOnChange}*/

                        />

                        <TextField className="w-1/2"
                                   id="outlined-basic"
                                   label="Mobile"
                                   variant="outlined"
                                   type="tel"
                                   name="mobile"
                                   /*value={this.state.mobile}
                                   onChange={this.handleMessageInputOnChange}*/

                        />

                        <TextField className="w-1/2"
                                   id="outlined-basic"
                                   label="Email"
                                   variant="outlined"
                                   type="email"
                                   name="email"
                                  /* value={this.state.email}
                                   onChange={this.handleMessageInputOnChange}*/

                        />
                    </div>

                    <div className="flex justify-evenly w-1/2 ">
                        <Button
                            type="button"
                            variant="contained"
                            /*onClick={this.saveCustomer}*/>

                            Save</Button>

                        <Button
                            type="button"
                            variant="contained"
                            color="success"
                            /*onClick={this.updateCustomer}*/>
                            Update</Button>

                        <Button
                            type="button"
                            variant="contained"
                            color="error"
                            /*onClick={this.saveCustomer}*/>

                            Delete</Button>
                    </div>

                </div>

            </div>
        );
    }
}