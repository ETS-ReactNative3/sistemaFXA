import React, { useRef } from 'react'

import { FileUpload } from 'primereact/fileupload';
import { Divider } from 'primereact/divider';


const ChangeFotografia = (params) => {

  const fileUploadRef = useRef(null);


    const onTemplateUpload = (e) => {
      params.toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
  }
  
  const headerTemplate = (options) => {
      const { className, chooseButton, uploadButton, cancelButton } = options;
     
      return (
          <div className={className} style={{backgroundColor: 'transparent', display: 'flex', alignItems: 'center'}}>
              {chooseButton}
              {uploadButton}
              {cancelButton}
          </div>
      );
  }

  const itemTemplate = (file) => {
      return (
        <div className="grid">
              <div className="col-5 text-center">
                Foto Anterior
                <div className="flex align-items-center justify-content-center w-full">
                    <img alt='' src={'https://drm2ecjli5gr8.cloudfront.net/efectos/grandes/polaroidStyle.jpg'} width={100} />
                </div>
              </div>
              <Divider layout='vertical col-1'/>
              <div className="col-5 text-center">
                Nueva Foto
                <div className="flex align-items-center justify-content-center w-full">
                  <div className="flex align-items-center">
                      <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                  </div>
                </div>
              </div>
          </div>
          
      )
  }

  const emptyTemplate = () => {
      return (
          <div className="grid">
              <div className="col-5 text-center">
                Foto Anterior
                <div className="flex align-items-center justify-content-center w-full">
                    <img alt='' src={'https://drm2ecjli5gr8.cloudfront.net/efectos/grandes/polaroidStyle.jpg'} width={100} />
                </div>
              </div>
              <Divider layout='vertical col-1'/>
              <div className="col-5 text-center">
                Nueva Foto
                <div className="flex align-items-center flex-column">
                  <i className="pi pi-image p-5" style={{'fontSize': '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)'}}></i>
                </div>
              </div>
          </div>
      )
  }

  const chooseOptions = {icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined'};
  const uploadOptions = {icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined'};
  const cancelOptions = {icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined'};

  const uploadImage = (e) =>{
    console.log(e)
  }

  return (
    <div>
      <FileUpload ref={fileUploadRef} name="prueba[]" /* url=""  */ customUpload uploadHandler={uploadImage} accept="image/*" maxFileSize={1000000}
        onUpload={onTemplateUpload} 
        headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
        chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />
    </div>
  )
}

export default ChangeFotografia