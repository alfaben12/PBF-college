import React from 'react';
    return (
        <div>
            <h3>Halaman Footer</h3>
            <h3>Component ini dibuat menggunakan Function, bukan Class</h3>
            <p>Nilai ini ditampilkan dari props : { props.judul }</p>
            <p>Nama Saya : {props.nama} </p>
        </div>
    );
}
export default Footer;