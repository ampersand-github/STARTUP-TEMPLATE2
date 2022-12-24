/* ユーザーに権限を与えないとマイグレーションできない */
create user template_user@localhost identified by 'template_pass';
grant create, alter, drop, references on *.* to template_user;
