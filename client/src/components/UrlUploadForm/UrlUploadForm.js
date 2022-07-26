import React, { useState } from 'react'
import axios from 'axios';
import styles from './UrlUploadForm.module.css'

const UrlUploadForm = (props) => {

    const [inputUrl, setInPutUrl]= useState('Ingresa una URL aqui...')

    const handleOnChangeUrlInput = (e) => {
        setInPutUrl(e.target.value)
        
    }
   
    const onSubmit = async e => {
        e.preventDefault();
        
        try {
          const res = await axios.post('http://localhost:8080/', 
          {url: inputUrl}, 
          { headers: { 'Content-Type': 'application/json'} },
        );
        const paramArr = res.data.fileName.split('/')
        const src =  paramArr.slice(paramArr.length-2).join('/')
        
        props.updateImageSrc(src);
        props.openMain();
            
        } catch (err) {
         console.log(err)
        }
    }

    return (
      <div className= {styles.LoginContainer}>
        <form onSubmit ={onSubmit} className ={styles.LoginForm}>
          Pega aqui tu URL
                <input
                value ={inputUrl}
                type="text" 
                onChange = {handleOnChangeUrlInput}
                placeholder = 'Paste an Url'
                />
                <input
                  type='submit'
                  value='Upload'
                />   
        </form>
    </div>
    )
}

export default UrlUploadForm