!function(){"use strict";const o=1605107572983,n="cache"+o,e=["/client/client.84b79515.js","/client/inject_styles.5607aec6.js","/client/en.4e6e7a3c.js","/client/de.bd2cd29c.js","/client/index.2178ba60.js","/client/[slug].1e8dcd00.js"].concat(["/service-worker-index.html","/base.css","/default-skin/default-skin.css","/default-skin/default-skin.png","/default-skin/default-skin.svg","/default-skin/preloader.gif","/fonts/ailerons/ailerons.otf","/fonts/fira-mono/fira-mono-latin-400.woff2","/fonts/roboto/roboto-latin-400.woff2","/fonts/roboto/roboto-latin-400italic.woff2","/fonts/roboto/roboto-latin-500.woff2","/fonts/roboto/roboto-latin-500italic.woff2","/icons/android-chrome-192x192.png","/icons/android-chrome-512x512.png","/icons/apple-touch-icon.png","/icons/favicon-16x16.png","/icons/favicon-32x32.png","/icons/favicon.ico","/icons/mstile-150x150.png","/icons/safari-pinned-tab.svg","/img/accounts_org_register.png","/img/accounts_otp_select.png","/img/accounts_otp_setup.png","/img/accounts_otp_setup_done.png","/img/accounts_otp_verify.png","/img/accounts_page.png","/img/accounts_password.png","/img/accounts_verify_code_password.png","/img/accounts_verify_code_password_done.png","/img/console_admin_entry.png","/img/console_admin_system.png","/img/console_authz_add_1.png","/img/console_authz_add_2.png","/img/console_authz_add_3.png","/img/console_authz_overview.png","/img/console_clients_my_first_spa_config.png","/img/console_clients_my_first_spa_wizard_1.png","/img/console_clients_my_first_spa_wizard_2.png","/img/console_clients_my_first_spa_wizard_3.png","/img/console_clients_my_first_spa_wizard_4.png","/img/console_iam_admin_failed.png","/img/console_iam_admin_views.png","/img/console_org_domain.png","/img/console_org_domain_add.png","/img/console_org_domain_added.png","/img/console_org_domain_default.png","/img/console_org_domain_primary.png","/img/console_org_domain_verified.png","/img/console_org_domain_verify.png","/img/console_org_domain_verify_dns.png","/img/console_org_manage_roles_1.png","/img/console_org_manage_roles_2.png","/img/console_personal_information.png","/img/console_personal_information_org_owner.png","/img/console_project_manage_roles_1.png","/img/console_project_manage_roles_2.png","/img/console_projects_empty.png","/img/console_projects_my_first_project.png","/img/console_user_create_done.png","/img/console_user_create_form.png","/img/console_user_entry.png","/img/console_user_list.png","/img/console_user_list_search.png","/img/console_user_manage_roles_1.png","/img/console_user_manage_roles_2.png","/img/console_user_personal_info.png","/img/console_user_personal_information.png","/img/develop2.png","/img/grafana_client_settings.png","/img/grafana_login_button.png","/img/grafana_profile_settings.png","/img/grafana_project_settings.png","/img/grafana_zitadel_authorization.png","/img/personal2.png","/img/projects2.png","/img/usermanual.png","/img/zitadel_cluster_architecture.png","/img/zitadel_multicluster_architecture.png","/img/zitadel_software_architecture.png","/logos/zitadel-logo-dark@2x.png","/logos/zitadel-logo-light.svg","/logos/zitadel-logo-solo-darkdesign.svg","/manifest.json","/photoswipe-ui-default.min.js","/photoswipe.css","/photoswipe.min.js","/prism.css"]),s=new Set(e);self.addEventListener("install",(o=>{o.waitUntil(caches.open(n).then((o=>o.addAll(e))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(o=>{o.waitUntil(caches.keys().then((async o=>{for(const e of o)e!==n&&await caches.delete(e);self.clients.claim()})))})),self.addEventListener("fetch",(n=>{if("GET"!==n.request.method||n.request.headers.has("range"))return;const e=new URL(n.request.url);e.protocol.startsWith("http")&&(e.hostname===self.location.hostname&&e.port!==self.location.port||(e.host===self.location.host&&s.has(e.pathname)?n.respondWith(caches.match(n.request)):"only-if-cached"!==n.request.cache&&n.respondWith(caches.open("offline"+o).then((async o=>{try{const e=await fetch(n.request);return o.put(n.request,e.clone()),e}catch(e){const s=await o.match(n.request);if(s)return s;throw e}})))))}))}();
