import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICar } from 'app/shared/model/car.model';
import { getEntities } from './car.reducer';

export const Car = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const carList = useAppSelector(state => state.car.entities);
  const loading = useAppSelector(state => state.car.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  return (
    <div>
      <h2 id="car-heading" data-cy="CarHeading">
        <Translate contentKey="xmplReactSpringwiseApp.car.home.title">Cars</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="xmplReactSpringwiseApp.car.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/car/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="xmplReactSpringwiseApp.car.home.createLabel">Create new Car</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {carList && carList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.car.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.car.motorSize">Motor Size</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.car.modelName">Model Name</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.car.wheelSize">Wheel Size</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.car.transmission">Transmission</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.car.color">Color</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.car.yearOf">Year Of</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.car.price">Price</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {carList.map((car, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/car/${car.id}`} color="link" size="sm">
                      {car.id}
                    </Button>
                  </td>
                  <td>{car.motorSize}</td>
                  <td>{car.modelName}</td>
                  <td>{car.wheelSize}</td>
                  <td>{car.transmission}</td>
                  <td>{car.color}</td>
                  <td>{car.yearOf}</td>
                  <td>{car.price}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/car/${car.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/car/${car.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/car/${car.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="xmplReactSpringwiseApp.car.home.notFound">No Cars found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Car;
