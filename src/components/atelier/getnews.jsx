import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import Edit from './modifPub';


export default class Tableau extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };
        
    }
    componentDidMount() {
       var test = []
        axios.get('https://gecback.herokuapp.com/atelier')
            .then(response => {
                for(let i=0; i<response.data.length; i++){
                    if(response.data[i].id_user==localStorage.getItem('id_user')){
                        test.push(response.data[i])
                    }
                }
                console.log('publication:', response.data)
                this.setState({ profil: test });
            })
            .catch(function (error) {
                console.log(error);
            })
           
    }

    liste() {
        return <div>
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-10">
                <div id="listecomponent">
                    <h4 id="h4tableau">Publication  recents</h4>
                <table className="table table-striped table-bordered table-hover" id="table">
                    <thead>
                        <tr>
                            <th className="thtab">Images</th>
                            <th className="thtab">Nom</th>
                            <th className="thtab">Description</th>
                            <th className="thtab">Date</th>
                            <th className="thtab">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return <tr key={obj._id}>
                                    <td><img id="imagetab" width="100px" height="90px" src={'https://gecback.herokuapp.com/atelier/'+obj.photo} alt={obj.photo}/></td>
                                    <td><h3 id="tex" className="marge">{obj.titre}</h3></td>
                                    <td id="lign1"><p >{obj.description}</p></td>
                                    <td>{obj.date}</td>
                                    <td> 
                                    <div className="row">
                                        <div className="col-md-7">
                                
                                            {obj.visibilite == true ?(<button className="btn btn-secondary" id="visual" onClick={(e)=>{
                                                    e.preventDefault()
                                                    axios.get("https://gecback.herokuapp.com/masqueratelier/"+obj._id).then(res=>{
                                                        axios.get('https://gecback.herokuapp.com/atelier')
                                                        .then(response => {
                                                            var test = []
                                                            for(let i=0; i<response.data.length; i++){
                                                                if(response.data[i].id_user==localStorage.getItem('id_user')){
                                                                    test.push(response.data[i])
                                                                }
                                                            }
                                                            console.log('produit tableau :', response.data)
                                                            this.setState({ profil: test });
                                                        })
                                                        .catch(function (error) {
                                                            console.log(error);
                                                        })
                                                    console.log(res.data)
                                                })
                                                }}><i class="glyphicon glyphicon-minus-sign"></i>Visibilité:Desactiver</button>):(<button id="visual" className="btn btn-secondary" onClick={(e)=>{
                                                    e.preventDefault()  
                                                    axios.get("https://gecback.herokuapp.com/afficheatelier/"+obj._id).then(res=>{
                                                        axios.get('https://gecback.herokuapp.com/atelier')
                                                        .then(response => {
                                                            var test = []
                                                            for(let i=0; i<response.data.length; i++){
                                                                if(response.data[i].id_user==localStorage.getItem('id_user')){
                                                                    test.push(response.data[i])
                                                                }
                                                            }
                                                            console.log('produit tableau :', response.data)
                                                            this.setState({ profil: test });
                                                        })
                                                        .catch(function (error) {
                                                            console.log(error);
                                                        })
                                                         }
                                                     )
                                            }}><i class="glyphicon glyphicon-ok"></i>visibilité: Activer</button>)}
                                        </div>
                                        <div className="col-md-2">
                                            <Edit id={obj._id}/>
                                        </div>
                                        <div className="col-md-3">
                                                
                                                <Button className="remove-btn" color="danger" id="boutton" onClick={(e)=>{
                                                e.preventDefault()
                                                axios.delete("https://gecback.herokuapp.com/pub/"+obj._id).then(res=>{
                                                    axios.get('https://gecback.herokuapp.com/atelier'+ localStorage.getItem('id')).then(res=>{
                                                        console.log(res.data)
                                                        this.setState({atelier:res.data})
                                                    })
                                                console.log(res.data)
                                            })
                                            }} >&times;</Button>
                                        </div>
                                    </div>
                                                 
                                </td>
                                    
                                </tr>
                            })) : ('Aucun publication a ajouter')
                        }
                    </tbody>
                </table>
            </div>
                </div>
            </div>
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}