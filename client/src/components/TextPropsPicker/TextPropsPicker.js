import React from 'react';
import {FormGroup, Label} from 'reactstrap';
import Card from '../Card/Card';
import { CirclePicker } from 'react-color';
import './TextPropsPicker.css';

const fonts = ['Impact','Arial', 'Comic Sans MS', 'Pacifico'];

const TextPropsPicker = ({changeText, updateFont, updateFontSize, updateColor, textStyle}) => {
    const {fontFamily, fontSize, fill} = textStyle
    return (
    <div>
        <Card title = 'Ingresa el texto'>
            <div className="meme-form">
                <FormGroup>
                    <Label htmlFor="toptext">Ingresa el texto 1</Label>
                    <input 
                        className="form-control" 
                        type="text" name="toptext" 
                        id="toptext" 
                        placeholder="Escribe aqui..." 
                        onChange={changeText} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="bottomtext">Ingresa el texto 2</Label>
                    <input 
                    className="form-control" 
                    type="text" name="bottomtext" 
                    id="bottomtext" 
                    placeholder="Escribe aqui..." 
                    onChange={changeText} />
                </FormGroup>
                
            </div>
        </Card>  
        <Card title = "Edita el estilo de letra">    
            <div className="TextPropsPicker">
                <FormGroup>
                    <Label htmlFor="font">Tipo de letra:</Label>
                    <select  className="form-control" id ='font' value= {fontFamily} onChange={updateFont}>
                        {fonts.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </FormGroup>
                
                <FormGroup>                 
                    <Label htmlFor="sizeRange">Tamaño de letra</Label>
                    <input 
                        type="range" 
                        value={parseInt(fontSize)} 
                        onChange={updateFontSize} 
                        className="custom-range" 
                        min="20" max="100" 
                        id="sizeRange"/>
                </FormGroup>
            </div>
        </Card>
        <Card title = "Cambiar el color de texto"> 
            <div className="TextPropsPicker-colors">
                <CirclePicker
                    color={fill}
                    onChangeComplete={ updateColor }
                />
            </div>
        </Card>
    </div>
    )
}

export default TextPropsPicker
