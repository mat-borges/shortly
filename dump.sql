--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: session_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.session_status AS ENUM (
    'open',
    'closed'
);


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    token text NOT NULL,
    status public.session_status DEFAULT 'open'::public.session_status NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    user_id integer NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 7, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo3LCJuYW1lIjoiRmluYWwiLCJlbWFpbCI6ImZpbmFsQGZpbmFsLmNvbSIsImlhdCI6MTY3MTY5NjUzOX0.J1lSyC1pvVl6dZwmvM9-NOgX0edQbvBL5GEdhPBdOc8', 'open', '2022-12-22');
INSERT INTO public.sessions VALUES (2, 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4LCJuYW1lIjoiVGVzdGUxIiwiZW1haWwiOiJ0ZXN0ZTFAdGVzdGUuY29tIiwiaWF0IjoxNjcxNjk2NTQ3fQ.D4rMJRWGP1e_rjUVAWiqmAc9JUlHuLrha2zkSujuFZs', 'open', '2022-12-22');
INSERT INTO public.sessions VALUES (3, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJuYW1lIjoiVGVzdGUiLCJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MTY3MTY5NjU1MH0.CyRmJDPKH0wtpKKpqU1mVojYPeAsUTZ5mmA6d8YXggE', 'open', '2022-12-22');
INSERT INTO public.sessions VALUES (4, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJuYW1lIjoiTWF0ZXVzIEJvcmdlcyIsImVtYWlsIjoibWF0ZXVzQGJvcmdlcy5jb20iLCJpYXQiOjE2NzE2OTY1NTd9.XedFRAVlNlTonc7zdHuvRXIrogb5JmwRK6AEly29uM0', 'open', '2022-12-22');
INSERT INTO public.sessions VALUES (5, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJuYW1lIjoiTWF0ZXVzIiwiZW1haWwiOiJtYXRldXNAbWF0ZXVzLmNvbSIsImlhdCI6MTY3MTY5NjU2MX0.WGC_2Fbk8xY2hwTZxde4OjKTM9-_Ea4akua_RWbbKnU', 'open', '2022-12-22');
INSERT INTO public.sessions VALUES (6, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJuYW1lIjoiQm9yZ2VzIiwiZW1haWwiOiJib3JnZXNAYm9yZ2VzLmNvbSIsImlhdCI6MTY3MTY5NjU2OH0.J23Jed4N7IOtxW6chYO4tawKoV5yRO3cBlpqCI1JDbM', 'open', '2022-12-22');
INSERT INTO public.sessions VALUES (7, 6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJuYW1lIjoiVXN1w6FyaW8iLCJlbWFpbCI6InVzdWFyaW9AdXN1YXJpby5jb20iLCJpYXQiOjE2NzE2OTY1NzZ9.JaItlANFQM_1pHw7hQ6AwoXm8yvNQa4QUsvV5WVW_tc', 'open', '2022-12-22');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (3, 'https://www.oglobo.globo.com.br/', 'GQsI7E0_1Ike', 7, 0, '2022-12-22');
INSERT INTO public.urls VALUES (5, 'https://www.oglobo.globo.com.br/', '64HaANoDjcTr', 7, 0, '2022-12-22');
INSERT INTO public.urls VALUES (6, 'https://www.oglobo.globo.com.br/', '_tJ1HvqhU4uY', 7, 0, '2022-12-22');
INSERT INTO public.urls VALUES (7, 'https://www.oglobo.globo.com.br/', 'WV41gvnvB-D8', 7, 0, '2022-12-22');
INSERT INTO public.urls VALUES (8, 'https://www.oglobo.globo.com.br/', 'hv-LGqDSfd5k', 7, 0, '2022-12-22');
INSERT INTO public.urls VALUES (10, 'https://www.google.com.br/', 'l8ONuLJ-Oqv3', 7, 0, '2022-12-22');
INSERT INTO public.urls VALUES (11, 'https://www.google.com.br/', 'Uv--tz_OLEt-', 7, 0, '2022-12-22');
INSERT INTO public.urls VALUES (12, 'https://www.google.com.br/', 'jnhSf-rYZUc-', 7, 0, '2022-12-22');
INSERT INTO public.urls VALUES (13, 'https://www.google.com.br/', '6nbg9Zs4UVpX', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (14, 'https://www.google.com.br/', 'ER4UHeWZe5BU', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (15, 'https://www.google.com.br/', 'DimCq81a5Cw8', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (16, 'https://www.google.com.br/', 'MGMW5bkDTZ-E', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (18, 'https://www.oglobo.globo.com.br/', 'EihEi2YpGG8_', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (20, 'https://www.oglobo.globo.com.br/', 'FJjAuct3vjzW', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (21, 'https://www.oglobo.globo.com.br/', 'mV8YTONHv8Tu', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (22, 'https://www.driven.com.br/', 'homWRPIuafec', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (23, 'https://www.driven.com.br/', 'grcHeDrN9i_B', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (24, 'https://www.driven.com.br/', '2ZVdVe52xPNt', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (26, 'https://www.driven.com.br/', 'z6sBmXGmv3lq', 6, 0, '2022-12-22');
INSERT INTO public.urls VALUES (27, 'https://www.driven.com.br/', 'EaqBUe0k7AbL', 6, 0, '2022-12-22');
INSERT INTO public.urls VALUES (28, 'https://www.driven.com.br/', 's6aoEIIbYs4k', 6, 0, '2022-12-22');
INSERT INTO public.urls VALUES (29, 'https://www.google.com.br/', 'tzxCyNGGWQoj', 6, 0, '2022-12-22');
INSERT INTO public.urls VALUES (30, 'https://www.google.com.br/', 'huBytLHrTkUt', 6, 0, '2022-12-22');
INSERT INTO public.urls VALUES (31, 'https://www.oglobo.globo.com.br/', 'lo4wTk6NIqyU', 6, 0, '2022-12-22');
INSERT INTO public.urls VALUES (32, 'https://www.oglobo.globo.com.br/', 'AvRIfMWbY_8w', 6, 0, '2022-12-22');
INSERT INTO public.urls VALUES (33, 'https://www.oglobo.globo.com.br/', 'OtJ1t0jbcKs4', 6, 0, '2022-12-22');
INSERT INTO public.urls VALUES (34, 'https://www.oglobo.globo.com.br/', 'CkbDeIg0Acwk', 6, 0, '2022-12-22');
INSERT INTO public.urls VALUES (35, 'https://www.oglobo.globo.com.br/', 'JV_8k5-DqYjM', 6, 0, '2022-12-22');
INSERT INTO public.urls VALUES (36, 'https://www.oglobo.globo.com.br/', 'ZFFaAPpq5ruF', 6, 0, '2022-12-22');
INSERT INTO public.urls VALUES (9, 'https://www.google.com.br/', 'vmP0iwXMVs9a', 7, 1, '2022-12-22');
INSERT INTO public.urls VALUES (2, 'https://www.oglobo.globo.com.br/', 'h37ocmaM2Bqg', 7, 4, '2022-12-22');
INSERT INTO public.urls VALUES (4, 'https://www.oglobo.globo.com.br/', 'grE_8zpqdxlT', 7, 6, '2022-12-22');
INSERT INTO public.urls VALUES (19, 'https://www.oglobo.globo.com.br/', 'etFljLVM_5E9', 1, 5, '2022-12-22');
INSERT INTO public.urls VALUES (60, 'https://www.google.com/', 'Z47nRYjEYZbl', 8, 15, '2022-12-22');
INSERT INTO public.urls VALUES (25, 'https://www.driven.com.br/', 'HLEoGjSOCxV6', 1, 4, '2022-12-22');
INSERT INTO public.urls VALUES (17, 'https://www.google.com.br/', 'GF_UJJN8Iwco', 1, 4, '2022-12-22');
INSERT INTO public.urls VALUES (37, 'https://www.oglobo.globo.com/', 'LXlfB6RgbztI', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (38, 'https://www.oglobo.globo.com/', 'kcblw_krE_IB', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (39, 'https://www.oglobo.globo.com/', 'rxLPPRKwILMk', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (40, 'https://www.oglobo.globo.com/', 'HymhzBrMnheR', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (41, 'https://www.oglobo.globo.com/', 'IbsjBYHMURBt', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (42, 'https://www.oglobo.globo.com/', 'kna8q1JL1nll', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (43, 'https://www.oglobo.globo.com/', 'Y8ygK597CpRD', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (44, 'https://www.oglobo.globo.com/', '1SYiJsBIcNQD', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (45, 'https://www.oglobo.globo.com/', 'PWeEKtmJjMIi', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (46, 'https://www.oglobo.globo.com/', '2uA1hu_fDKY3', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (47, 'https://www.oglobo.globo.com/', 'LIvytJMOD76L', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (48, 'https://www.oglobo.globo.com/', 'Qf9TrRNSqfHD', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (49, 'https://www.oglobo.globo.com/', 'MFi_RvVwixQG', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (50, 'https://www.oglobo.globo.com/', 'mxtZUpaXbWpP', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (51, 'https://www.oglobo.globo.com/', '4l7bbv9ZiIlf', 1, 0, '2022-12-22');
INSERT INTO public.urls VALUES (52, 'https://www.google.com/', 'wFAo12kJ1zwy', 8, 0, '2022-12-22');
INSERT INTO public.urls VALUES (53, 'https://www.google.com/', '5CjlJPou36ev', 8, 0, '2022-12-22');
INSERT INTO public.urls VALUES (54, 'https://www.google.com/', '9CXNbojCynYH', 8, 0, '2022-12-22');
INSERT INTO public.urls VALUES (55, 'https://www.google.com/', 'GRK2DE4gZ97Y', 8, 0, '2022-12-22');
INSERT INTO public.urls VALUES (56, 'https://www.google.com/', 'aCedHKL_GSBX', 8, 0, '2022-12-22');
INSERT INTO public.urls VALUES (57, 'https://www.google.com/', 'KwXToV7FqTuk', 8, 0, '2022-12-22');
INSERT INTO public.urls VALUES (58, 'https://www.google.com/', 'CT44jcNIjG8m', 8, 0, '2022-12-22');
INSERT INTO public.urls VALUES (59, 'https://www.google.com/', '67uvUYH3kFzp', 8, 0, '2022-12-22');
INSERT INTO public.urls VALUES (61, 'https://www.google.com/', 'D4sb006DdqWm', 8, 0, '2022-12-22');
INSERT INTO public.urls VALUES (62, 'https://www.google.com/', 'FRWmsHowr24f', 8, 0, '2022-12-22');
INSERT INTO public.urls VALUES (63, 'https://www.google.com/', 'vJl_bvFE8inr', 8, 0, '2022-12-22');
INSERT INTO public.urls VALUES (64, 'https://www.google.com/', 'YY0vm9yCiB_c', 8, 0, '2022-12-22');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Mateus', 'mateus@mateus.com', '$2b$12$hnPB0oqSjHzXq4f7FiSK9uWL74AV6IpTOz2CGI1Df4BBVnaWIOy2a', '2022-12-22');
INSERT INTO public.users VALUES (2, 'Borges', 'borges@borges.com', '$2b$12$swgR2n6Lb.R.RAhpB.4atujJWLSpSFkPL3wa/GFoc4mDdboCQ6IIW', '2022-12-22');
INSERT INTO public.users VALUES (3, 'Mateus Borges', 'mateus@borges.com', '$2b$12$Sg5ubAe25rcparY7F8vC0OTbB6vCLgXvVU83BbswgiZwEYWU1cqnW', '2022-12-22');
INSERT INTO public.users VALUES (4, 'Teste', 'teste@teste.com', '$2b$12$aJw70TRmYiRdEs4CgrKpAe/ia7snN0yqE29Yu8m9Y9u6d707YvjyK', '2022-12-22');
INSERT INTO public.users VALUES (5, 'User', 'user@user.com', '$2b$12$JEQz/R0XnjbMtzL5HZGwLub/Nquq4NhyOUxMGCjH4ejFqXCUiDDdy', '2022-12-22');
INSERT INTO public.users VALUES (6, 'Usuário', 'usuario@usuario.com', '$2b$12$OVDN1Pr/KTUl3tCxzkagQuNl5znszyr0GRhCnVJybX1TbxA4xKPAa', '2022-12-22');
INSERT INTO public.users VALUES (7, 'Final', 'final@final.com', '$2b$12$wGydwvXNtXAGNkx2sVDb8eoEuJuJawPplWevQ6rG55L26mlabogbW', '2022-12-22');
INSERT INTO public.users VALUES (8, 'Teste1', 'teste1@teste.com', '$2b$12$km.0Vnpd1GIYflzbNla8OejLgP6IoRmnQCWEUnH49rfBBuHNETAuC', '2022-12-22');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 7, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 64, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 8, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_fk0 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: urls urls_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_fk0 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

