---
title: Roles
---

### What are Roles

With **roles** **ZITADEL** lets [projects](administrate#projects) define there **role based access controle**.

**Roles** can be consumed by the [clients](administrate#clients) which exist witing a specific [project](administrate#projects).

For more information about how **roles** can be consumed have a look the the protocol specific information.

- [OpenID Connect / OAuth](integrate#How_to_consume_authorizations_in_your_application_or_service)

### Manage Roles

Each **role** consist of three fields.

| Field        | Description                                                                  | Example                                          |
|:-------------|:-----------------------------------------------------------------------------|--------------------------------------------------|
| Key          | This is the **Roles** actual name which can be used to verify the users roles.                                            | User                                             |
| Display Name | A descriptive text for the purpose of the **Role**                           | User is the default role provided to each person |
| Group        | The group field allows to group certain roles who belong in the same context | User and Admin in the group **default**          |

### Grantig Roles

To give someone (or somewhat) access to a [projects](administrate#projects) resources and services **ZITADEL** provides to processes. **Roles** can be either granted to [users](administrate#Users) org to [organisations](administrate#Organisations).

#### Grant Roles to Organisations

The possibility to grant **roles** to an [organisation](administrate#Organisations) is intented as "delegation" so that a [org](administrate#Organisations) can on their own grant access to [users](administrate#Users).

For example a **service provider** could grant the **roles** user, and manager to an [org](administrate#Organisations) as soon as they purchases his service. This can be automated by utilising a [service user](administrate#Manage_Service_Users) in the **service providers** business process.

> Screenshot here

#### Grant Roles to Users

By granting **roles** to [users](administrate#Users), be it [humanes or machines](administrate#Human_vs_Service_Users), this [user](administrate#Users) recieves the authorization to access resources from a service.

> Screenshot here