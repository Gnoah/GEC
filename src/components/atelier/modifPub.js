import React, { Component } from 'react';
import axios from 'axios';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

export default class ItemModal extends Component {
  constructor(props){
    super(props);
    this.state = {
        titre: '',
        description:'',
        photo: '',
    }
    this.onChange = this.onChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this);
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
};

onChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}
  handleEdit(ev) {
  ev.preventDefault();

  const data = new FormData();
    data.append('photo', this.uploadInput.files[0]);
    data.append('titre',this.state.titre);
    data.append('titre1',this.state.titre1);
    data.append('description',this.state.description);
    data.append('description1',this.state.description1);
console.log(this.props.id);


  fetch('https://gecback.herokuapp.com/atelier/'+ this.props.id, {

    method: 'PUT',
    body: data,
  }).then((response) => {
      
    response.json().then((body) => {
      axios.get('https://gecback.herokuapp.com/atelier/'+ localStorage.getItem('id')).then(res=>{
            console.log(res.data)
            this.setState({atelier:res.data})
        })
      this.setState({ photo: `https://gecback.herokuapp.com/atelier/${body.photo}` });
      console.log('photo eco :', body.photo);

    });
  });

  this.toggle();
}

  

  render() {
    return (
      <div>
          <Button onClick={this.toggle} id="boutton" className="btn edit" ><i className="fas fa-pen"></i></Button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit Atelier</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.handleEdit}>
              <FormGroup>
                <Label for="item">Atelier</Label>
                <Input type="text" name="titre" ref={(input) => this.getTitre = input}
                  validate success="right" value={this.state.value} placeholder="Enter titre" onChange={this.onChange}/>
                <Input type="text" name="description" ref={(input) => this.getDescription = input}
                 validate success="right" value={this.state.value}placeholder="Enter Description" onChange={this.onChange}/>
                 <Input type="text" name="titre1" ref={(input) => this.getTitre1 = input}
                 validate success="right" value={this.state.value}placeholder="Enter title 2" onChange={this.onChange}/>
                 <Input type="text" name="description1" ref={(input) => this.getDescription1 = input}
                 validate success="right" value={this.state.value}placeholder="Enter Description 2" onChange={this.onChange}/>
                <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo" required />
                <Button color="blue" style={{ marginTop: '2rem' }} block>
                  Modifier
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}