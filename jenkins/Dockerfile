FROM jenkins

ENV GRADLE_HOME /usr/bin/gradle-2.10
ENV PATH $PATH:$GRADLE_HOME/bin
ENV TERM ${TERM:-dumb}
ENV PORT 8080

EXPOSE 8080
EXPOSE 50000

USER root

WORKDIR /usr/bin

RUN apt-get update \
    && apt-get install -y nodejs vim \
    && curl -sL https://services.gradle.org/distributions/gradle-2.10-bin.zip > gradle.zip \
    && unzip -q gradle.zip \
    && rm gradle.zip
# TODO: install any other dependencies your build has

# mount /var/jenkins_home to persist jobs

