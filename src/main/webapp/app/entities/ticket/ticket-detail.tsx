import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './ticket.reducer';

export const TicketDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const ticketEntity = useAppSelector(state => state.ticket.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="ticketDetailsHeading">
          <Translate contentKey="xmplReactSpringwiseApp.ticket.detail.title">Ticket</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{ticketEntity.id}</dd>
          <dt>
            <span id="issue">
              <Translate contentKey="xmplReactSpringwiseApp.ticket.issue">Issue</Translate>
            </span>
          </dt>
          <dd>{ticketEntity.issue}</dd>
          <dt>
            <span id="timeStamp">
              <Translate contentKey="xmplReactSpringwiseApp.ticket.timeStamp">Time Stamp</Translate>
            </span>
          </dt>
          <dd>{ticketEntity.timeStamp ? <TextFormat value={ticketEntity.timeStamp} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <Translate contentKey="xmplReactSpringwiseApp.ticket.student">Student</Translate>
          </dt>
          <dd>{ticketEntity.student ? ticketEntity.student.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/ticket" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/ticket/${ticketEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default TicketDetail;
