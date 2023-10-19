import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './coding-category.reducer';

export const CodingCategoryDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const codingCategoryEntity = useAppSelector(state => state.codingCategory.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="codingCategoryDetailsHeading">
          <Translate contentKey="xmplReactSpringwiseApp.codingCategory.detail.title">CodingCategory</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{codingCategoryEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="xmplReactSpringwiseApp.codingCategory.name">Name</Translate>
            </span>
          </dt>
          <dd>{codingCategoryEntity.name}</dd>
        </dl>
        <Button tag={Link} to="/coding-category" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/coding-category/${codingCategoryEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default CodingCategoryDetail;
