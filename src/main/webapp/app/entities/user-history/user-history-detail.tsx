import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-history.reducer';

export const UserHistoryDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const userHistoryEntity = useAppSelector(state => state.userHistory.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userHistoryDetailsHeading">
          <Translate contentKey="xmplReactSpringwiseApp.userHistory.detail.title">UserHistory</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{userHistoryEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="xmplReactSpringwiseApp.userHistory.name">Name</Translate>
            </span>
          </dt>
          <dd>{userHistoryEntity.name}</dd>
          <dt>
            <span id="issue">
              <Translate contentKey="xmplReactSpringwiseApp.userHistory.issue">Issue</Translate>
            </span>
          </dt>
          <dd>{userHistoryEntity.issue}</dd>
          <dt>
            <span id="issueDate">
              <Translate contentKey="xmplReactSpringwiseApp.userHistory.issueDate">Issue Date</Translate>
            </span>
          </dt>
          <dd>
            {userHistoryEntity.issueDate ? (
              <TextFormat value={userHistoryEntity.issueDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/user-history" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-history/${userHistoryEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserHistoryDetail;
