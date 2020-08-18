import React, {useState}from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "./../../../../firebase";
// import CKEditor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddProduct = ({onAdd}) => {
    const { register, handleSubmit, watch, errors } = useForm();
    let history = useHistory();
    const [desc, setDesc] = useState("");
    const [smallDes, setsmallDes] = useState("");
    const [bigDes, setbigDes] = useState("");

  const onHandleSubmit = (data) => {
    let file = data.image[0];
    let storageRef = firebase.storage().ref(`images/${file.name}`);// tạo folder chứa ảnh trên firesbase
    let uploadTask = storageRef.put(file);// đẩy ảnh lên đường dẫn trên 
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED);// thực hiện việc đầy ảnh lên firebase

    // lấy ảnh từ Firebase
    firebase.storage().ref().child(`images/${file.name}`).getDownloadURL().then((url) => {
        // Tạo object mới chứa toàn bộ thông tin từ input
        const newData = {
          id: Math.random().toString(36).substr(2, 9),
          ...data,
          desc,
          smallDes,
          bigDes,
          image: url,
        };
        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        onAdd(newData);
      });

    history.push("/admin/products");
    alert("Thêm sản phẩm thành công");
  };
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Thêm sản phẩm</h6>
      </div>
      <div className="card-body">
        <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="form-group">
            <label htmlFor="">Tên sản phẩm</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              name="name"
              ref={register({ required: true, pattern: /^\S{1}.{0,24}$/i })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.name && errors.name.type === "required" && (
                <span>Không để trống tên sản phẩm </span>
              )}
              {errors.name && errors.name.type === "pattern" && (
                <span>
                  Tên sản phẩm không bắt đầu bằng dấu cách và ít hơn 25 kí tự{" "}
                </span>
              )}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="">Giá sản phẩm</label>
            <input className="form-control" 
                type="number" min="0" 
                placeholder="" name="price" 
                ref={register({ required: true, pattern: /^[0-9]{1,10}$/ })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.price && errors.price.type === "required" && (
                <span>Không để trống giá sản phẩm</span>
              )}
              {errors.price && errors.price.type === "pattern" && (
                <span>Giá sản phẩm gồm các số từ 0-9 ít hơn 10 kí tự</span>
              )}
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="">Giá sale</label>
            <input
              className="form-control"
              type="number"
              min="0"
              name="priceSale"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Ảnh</label>
            <input
              className="form-control"
              type="file"
              placeholder=""
              name="image"
              ref={register({ required: true, pattern: /^\S{1}.{0,100}$/i })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.image && errors.image.type === "required" && (
                <span>Ảnh không được để trống</span>
              )}
            </small>
          </div>
          {/* Nhập mô tả ngắn */}
          <div className="form-group">
            <label htmlFor="">Mô tả</label>
            <textarea
              className="form-control"
              type="text"
              placeholder=""
              name="mota"
              ref={register({ required: true, pattern: /^\S{1}.{0,24}$/i })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.name && errors.name.type === "required" && (
                <span>Không để trống phần mô tả </span>
              )}
              {errors.name && errors.name.type === "pattern" && (
                <span>
                  Tên mô tả phải ít hơn 25 kí tự{" "}
                </span>
              )}
            </small>
            {/* <CKEditor
              editor={ClassicEditor}
              data={smallDes}
              name="smalldes"
              onChange={(event, editor) => {
                const data = editor.getData();
                setsmallDes(data);
                console.log(data);
              }}
              ref={register({ required: true })}
            /> */}
          </div>
          <div className="form-group">
            <label htmlFor="">Chi tiết sản phẩm</label>
            {/* <CKEditor
              editor={ClassicEditor}
              data={bigDes}
              name="bigdes"
              onChange={(event, editor) => {
                const data = editor.getData();
                setbigDes(data);
                console.log(data);
              }}
              ref={register({ required: true })}
            /> */}
            <textarea
              className="form-control"
              type="text"
              placeholder=""
              name="chitiet"
              ref={register({ required: true, pattern: /^\S{1}.{0,100}$/i })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.name && errors.name.type === "required" && (
                <span>Không để trống phần chi tiết </span>
              )}
              {errors.name && errors.name.type === "pattern" && (
                <span>
                  Chi tiết phải lớn hơn 1 ký tự và nhỏ hơn 100 ký tự{" "}
                </span>
              )}
            </small>
          </div>

         
          <button type="submit" className="btn btn-primary mr-2">
            Save
          </button>
          <Link to="/admin/products">
            <button className="btn btn-danger text-white">Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

AddProduct.propTypes = {

}

export default AddProduct
