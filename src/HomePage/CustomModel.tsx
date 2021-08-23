import { Button,Modal} from 'react-bootstrap';
import React ,{useEffect ,useState} from 'react'

interface  CustomModelProps{
    show?: boolean;
    onHide?: () => void;
    Body:any;
    Title:any;
    Footer:any;
}

export default function CustomModel({
    show,
    onHide,
    Body,
    Title,
    Footer,
}:CustomModelProps) {
    
return (
        

            <Modal show={show} onHide={onHide}>
                <Modal.Header>
                  <Modal.Title>{Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{Body}</Modal.Body>
                <Modal.Footer>
                  <button  onClick={onHide}>Cancel</button>
                  <button  onClick={Footer}>Ok</button>
                  
                </Modal.Footer>
            </Modal>
        
         
           
            
    );
}
