FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app
COPY /backend .

RUN ./mvnw -f pom.xml clean package

FROM eclipse-temurin:17-jdk-alpine
COPY --from=build /app/target/*.jar /app.jar

ENTRYPOINT ["java","-jar","/app.jar"]

EXPOSE 8080
