import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IDog } from 'app/shared/model/dog.model';
import { getEntities } from './dog.reducer';

export const Dog = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const dogList = useAppSelector(state => state.dog.entities);
  const loading = useAppSelector(state => state.dog.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  return (
    <div>
      <h2 id="dog-heading" data-cy="DogHeading">
        <Translate contentKey="xmplReactSpringwiseApp.dog.home.title">Dogs</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="xmplReactSpringwiseApp.dog.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/dog/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="xmplReactSpringwiseApp.dog.home.createLabel">Create new Dog</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {dogList && dogList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.dog.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.dog.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.dog.age">Age</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.dog.breed">Breed</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {dogList.map((dog, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/dog/${dog.id}`} color="link" size="sm">
                      {dog.id}
                    </Button>
                  </td>
                  <td>{dog.name}</td>
                  <td>{dog.age}</td>
                  <td>{dog.breed}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/dog/${dog.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/dog/${dog.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/dog/${dog.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
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
              <Translate contentKey="xmplReactSpringwiseApp.dog.home.notFound">No Dogs found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Dog;
