while true
  do
    inotifywait -r -e modify -e move -e create -e delete ./bioregnet-core/src/main/webapp | while read line
      do
        echo "file changed; reloading war file"
        mvn package
        cp bioregnet-core/target/bioregnet-coreui-0.1-SNAPSHOT.war ~/ASF/apache-tomcat-7.0.40/webapps
      done
  done
