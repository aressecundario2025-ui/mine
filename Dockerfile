FROM 3arthqu4ke/headlessmc:latest

WORKDIR /dido

COPY mods /dido/mods
COPY start.sh /dido/start.sh

RUN chmod +x /dido/start.sh

CMD ["/dido/start.sh"]
