import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IScore } from 'app/shared/model/score.model';
import { getEntities } from './score.reducer';

export const Score = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const scoreList = useAppSelector(state => state.score.entities);
  const loading = useAppSelector(state => state.score.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  return (
    <div>
      <h2 id="score-heading" data-cy="ScoreHeading">
        <Translate contentKey="xmplReactSpringwiseApp.score.home.title">Scores</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="xmplReactSpringwiseApp.score.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/score/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="xmplReactSpringwiseApp.score.home.createLabel">Create new Score</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {scoreList && scoreList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.score.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="xmplReactSpringwiseApp.score.points">Points</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {scoreList.map((score, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/score/${score.id}`} color="link" size="sm">
                      {score.id}
                    </Button>
                  </td>
                  <td>{score.points}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/score/${score.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/score/${score.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/score/${score.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
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
              <Translate contentKey="xmplReactSpringwiseApp.score.home.notFound">No Scores found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Score;
