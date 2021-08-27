import React, { useState} from 'react'
import './form.scss'

const Form = ({ createOrder }) => {
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        emailConfirmation: ''
    })

    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
        console.log(form)
    }

    const finalizarCompra= () => {
        const { name, email, phone } = form
        createOrder({ name, email, phone })
    }
    const disabled = !(
        form.email.length &&
        form.name.length &&
        form.emailConfirmation.length &&
        form.phone.length > 0 &&
        form.email === form.emailConfirmation
    )


    return (
        <div>
            <h2 className="title">Datos de envío</h2>
            <form  className="form">
                <div className="formInput">
                    <label>👤</label>
                    <input placeholder="Nombre y Apellido" name="name" value={form.name} onChange={getContactData} type="text"/>
                </div>
                <div className="formInput">
                    <label>📱</label>
                    <input placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text"/>
                </div>
                <div className = "formInput">
                    <label>💌</label>
                    <input placeholder="Email" name="email" value={form.email} onChange={getContactData} type="email"/>
                </div>
                <div className="formInput">
                    <label>💌</label>
                    <input placeholder="Confirma Email" name="emailConfirmation" value={form.emailConfirmation} onChange={getContactData} type="email"/>
                </div>
            </form>
            <button type="submit" className="finalize"  disabled={disabled} onClick={finalizarCompra}>Finalizar</button>
            
        </div>
    )
}
export default Form