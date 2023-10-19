import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserHistory } from 'app/shared/model/user-history.model';
import { getEntity, updateEntity, createEntity, reset } from './user-history.reducer';

export const UserHistoryUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const userHistoryEntity = useAppSelector(state => state.userHistory.entity);
  const loading = useAppSelector(state => state.userHistory.loading);
  const updating = useAppSelector(state => state.userHistory.updating);
  const updateSuccess = useAppSelector(state => state.userHistory.updateSuccess);

  const handleClose = () => {
    navigate('/user-history');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...userHistoryEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...userHistoryEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="xmplReactSpringwiseApp.userHistory.home.createOrEditLabel" data-cy="UserHistoryCreateUpdateHeading">
            <Translate contentKey="xmplReactSpringwiseApp.userHistory.home.createOrEditLabel">Create or edit a UserHistory</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="user-history-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.userHistory.name')}
                id="user-history-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.userHistory.issue')}
                id="user-history-issue"
                name="issue"
                data-cy="issue"
                type="text"
              />
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.userHistory.issueDate')}
                id="user-history-issueDate"
                name="issueDate"
                data-cy="issueDate"
                type="date"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-history" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default UserHistoryUpdate;
