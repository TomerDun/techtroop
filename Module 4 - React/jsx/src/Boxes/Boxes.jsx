import './boxes.css';
import Box from './Box';

export default function Boxes() {
    return (
        <div className="boxes">
            <Box name='fresh' design='fresh'/>
            <Box name='calm' design='calm'/>
            <Box name='adventures' design='adventures'/>
            <Box name='happy' design='happy'/>            
        </div>
    )
}