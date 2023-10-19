import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IMovie } from 'app/shared/model/movie.model';
import { getEntities } from './movie.reducer';

export const Movie = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const movieList = useAppSelector(state => state.movie.entities);
  const loading = useAppSelector(state => state.movie.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  return (
    <div>
      <h2 id="movie-heading" data-cy="MovieHeading">
        <Translate contentKey="xmplReactSpringwiseApp.movie.home.title">Movies</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="xmplReactSpringwiseApp.movie.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/movie/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="xmplReactSpringwiseApp.movie.home.createLabel">Create new Movie</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {movieList && movieList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.movie.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.movie.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.movie.yearOf">Year Of</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.movie.genre">Genre</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.movie.rating">Rating</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {movieList.map((movie, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/movie/${movie.id}`} color="link" size="sm">
                      {movie.id}
                    </Button>
                  </td>
                  <td>{movie.name}</td>
                  <td>{movie.yearOf}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.rating}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/movie/${movie.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/movie/${movie.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/movie/${movie.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
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
              <Translate contentKey="xmplReactSpringwiseApp.movie.home.notFound">No Movies found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Movie;
