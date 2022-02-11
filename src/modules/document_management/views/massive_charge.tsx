import React from 'react'
import { Card } from '../../../utils/ui';
import ElectronicFielList from '../components/ElectronicFielList';
import { useDispatch, useSelector } from 'react-redux';
import actions from './../../acquisitions/redux/actions/index';
import FilterForm from './../../../utils/ui/filter_form';
import Importer from "../../../utils/ui/importer";

const MassiveCharge = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Importer />
                </div>
            </div>
        </div>
    )
}

export default MassiveCharge;
