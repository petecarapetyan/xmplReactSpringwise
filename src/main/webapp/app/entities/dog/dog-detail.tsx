import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './dog.reducer';

export const DogDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const dogEntity = useAppSelector(state => state.dog.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="dogDetailsHeading">
          <Translate contentKey="xmplReactSpringwiseApp.dog.detail.title">Dog</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{dogEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="xmplReactSpringwiseApp.dog.name">Name</Translate>
            </span>
          </dt>
          <dd>{dogEntity.name}</dd>
          <dt>
            <span id="age">
              <Translate contentKey="xmplReactSpringwiseApp.dog.age">Age</Translate>
            </span>
          </dt>
          <dd>{dogEntity.age}</dd>
          <dt>
            <span id="breed">
              <Translate contentKey="xmplReactSpringwiseApp.dog.breed">Breed</Translate>
            </span>
          </dt>
          <dd>{dogEntity.breed}</dd>
        </dl>
        <Button tag={Link} to="/dog" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/dog/${dogEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default DogDetail;
