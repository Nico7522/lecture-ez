import React from 'react';
import '../style/style.css';
const ListeDeroulante = () => {

    return (
<div className="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Pages
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#1">1</a></li>
    <li><a class="dropdown-item" href="#2">2</a></li>
    <li><a class="dropdown-item" href="#3">3</a></li>
    <li><a class="dropdown-item" href="#4">4</a></li>
    <li><a class="dropdown-item" href="#5">5</a></li>
    <li><a class="dropdown-item" href="#6">6</a></li>
    <li><a class="dropdown-item" href="#7">7</a></li>
    <li><a class="dropdown-item" href="#8">8</a></li>
    <li><a class="dropdown-item" href="#9">9</a></li>
    <li><a class="dropdown-item" href="#10">10</a></li>
    <li><a class="dropdown-item" href="#11">11</a></li>
    <li><a class="dropdown-item" href="#12">12</a></li>
    <li><a class="dropdown-item" href="#13">13</a></li>
    <li><a class="dropdown-item" href="#14.15">14 et 15</a></li>
    {/* <li><a class="dropdown-item" href="#15">15</a></li> */}
    <li><a class="dropdown-item" href="#16">16</a></li>
    <li><a class="dropdown-item" href="#17">17</a></li>
    <li><a class="dropdown-item" href="#18">18</a></li>
    <li><a class="dropdown-item" href="#19">19</a></li>
    <li><a class="dropdown-item" href="#20">20</a></li>
  </ul>
</div>
    );
};

export default ListeDeroulante;