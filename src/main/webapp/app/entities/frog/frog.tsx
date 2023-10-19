import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IFrog } from 'app/shared/model/frog.model';
import { getEntities } from './frog.reducer';

export const Frog = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const frogList = useAppSelector(state => state.frog.entities);
  const loading = useAppSelector(state => state.frog.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  return (
    <div>
      <h2 id="frog-heading" data-cy="FrogHeading">
        <Translate contentKey="xmplReactSpringwiseApp.frog.home.title">Frogs</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="xmplReactSpringwiseApp.frog.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/frog/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="xmplReactSpringwiseApp.frog.home.createLabel">Create new Frog</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {frogList && frogList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.frog.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.frog.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.frog.age">Age</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.frog.species">Species</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {frogList.map((frog, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/frog/${frog.id}`} color="link" size="sm">
                      {frog.id}
                    </Button>
                  </td>
                  <td>{frog.name}</td>
                  <td>{frog.age}</td>
                  <td>{frog.species}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/frog/${frog.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/frog/${frog.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/frog/${frog.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
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
              <Translate contentKey="xmplReactSpringwiseApp.frog.home.notFound">No Frogs found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Frog;
