import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css'
const Admin = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: ""
  });
  const [showData, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [indexId, setIndexId] = useState(null);
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)

  const getApi = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/");
      setData(res.data.data);
    } catch (error) {
      console.log(`Data not fetched: ${error}`);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {title,price,description,category} = form;
    const formData = new FormData();
    formData.append('title',title)
    formData.append('price',price)
    formData.append('description',description)
    formData.append('category',category)
    formData.append('image',file)

    try {
      const res = await axios.post("http://localhost:4000/api/", formData);
      console.log(`data send successfully ${res}`)
      alert("Data sent successfully");
      setForm({ title: "", description: "", price: "", category: ""});
      setFile(null)
      getApi();
    } catch (error) {
      console.log(`Data not sent: ${error}`);
      alert("Something went wrong");
    }
  };

  const doDelete = async (item) => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/${item._id}`);
      if (res.status === 200) {
        alert("Data deleted");
        getApi();
      }
    } catch (error) {
      console.log(`Error deleting: ${error}`);
    }
  };

  const doUpdate = (item) => {
    setForm({
      title: item.title,
      description: item.description,
      price: item.price,
      category: item.category
    });
    setIsEdit(true);
    setIndexId(item._id);
    setPreview(item.image)
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("title",form.title)
    formData.append("description",form.description)
    formData.append("price",form.price)
    formData.append("category",form.category)

    if(file){
      formData.append("image",file)
    }else if (preview) {
  formData.append("existingImage", preview); // send old image URL
}
    try {
      const res = await axios.put(`http://localhost:4000/api/${indexId}`, formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
     }
        
      );
      if (res.status === 200) {
        alert("Data updated");
        setForm({ title: "", description: "", price: "", category: ""});
        setIsEdit(false);
        setIndexId(null);
        setFile(file)
        getApi();
      }
    } catch (error) {
      console.log(`Error updating: ${error}`);
    }
  };

  return (
    <div className='admin'>
      <p className='headingAdmin text-center fs-2 fw-bold text-secondary'>Add your product</p>
      <form className='adminForm py-5 mb-5 border border-1 border-secondary form-control bg-secondary-subtle  d-flex flex-column gap-2' onSubmit={isEdit ? handleUpdate : handleSubmit}>
        {preview && (
    <div>
      <p>Current Image:</p>
      <img
        src={preview}
        alt="Preview"
        style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px' }}
      />
    </div>
  )}
        <input className='form-control' onChange={handleChange} name="title" value={form.title} type="text" placeholder='Product title' />
        <input className='form-control' onChange={handleChange} name="description" value={form.description} type="text" placeholder='Enter description' />
        <input className='form-control' onChange={handleChange} name="price" value={form.price} type="text" placeholder='Enter price' />
        <input className='form-control' onChange={handleChange} name="category" value={form.category} type="text" placeholder='Enter category' />
        <input className='form-control' onChange={(e)=>setFile(e.target.files[0])} name="image" type="file" />
        <button className='btn btn-danger fs-5 my-3' type='submit'>{isEdit ? "Update" : "Submit"}</button>
      </form>
      

      {showData.map((item) => (
        <div key={item._id} className="card w-sm-50 p-sm-3 mb-2 shadow-sm">
          <p><strong>Title:</strong> {item.title}</p>
          <p><strong>Description:</strong> {item.description}</p>
          <p><strong>Price:</strong> {item.price}</p>
          <img style={{width:'190px',height:'100px'}} src={item.image} alt="product image" />
          <div className='d-flex w-100 gap-2 py-3'>
            <button className='form-control  btn btn-outline-danger' onClick={() => doDelete(item)}>Delete</button>
          <button className='form-control  btn btn-danger' onClick={() => doUpdate(item)}>Edit</button>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Admin;
