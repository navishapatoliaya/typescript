import { Modal} from 'react-bootstrap';


interface  CustomModelProps{
    show?: boolean;
    onHide?: () => void;
    onok?:()=> void;
    body:any;
    title:any;
    footer:any;
}

export default function CustomModel({
    show,
    onHide,
    onok,
    body,
    title,
    footer,
}:CustomModelProps) {
    
return (
        

            <Modal show={show} onHide={onHide}>
                <Modal.Header>
                  <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>
                  <button  onClick={onHide}>Cancel</button>
                  <button  onClick={onok}>Ok</button>
                  
                </Modal.Footer>
            </Modal>
        
         
           
            
    );
}
