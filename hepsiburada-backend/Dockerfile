FROM maven:3.8-jdk-11 as build

COPY src /usr/src/app/src
COPY pom.xml /usr/src/app

RUN mvn -f /usr/src/app/pom.xml clean package -DskipTests

FROM openjdk:11-jdk-slim

COPY --from=build /usr/src/app/target/hepsiburadaBackend-0.0.1-SNAPSHOT.jar /usr/app/app.jar

ENTRYPOINT ["java","-jar","/usr/app/app.jar"]