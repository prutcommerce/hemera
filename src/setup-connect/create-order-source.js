import { melissa } from 'src'
import { nephele } from 'src/deps'
import { connectionUrl } from 'src/setup-connect/connection-url'

const makeConfig = () => ({
  'connector.class': 'io.confluent.connect.jdbc.JdbcSourceConnector',
  'tasks.max': 1,
  'connection.url': connectionUrl(),
  'connection.user': melissa.core.settings.getDatabaseUsername(),
  'connection.password': melissa.core.settings.getDatabasePassword(),
  'key.converter': 'org.apache.kafka.connect.json.JsonConverter',
  'value.converter': 'org.apache.kafka.connect.json.JsonConverter',
  'key.converter.schemas.enable': false,
  'value.converter.schemas.enable': true,
  'transforms': 'createKey,extractKey',
  'transforms.createKey.type': 'org.apache.kafka.connect.transforms.ValueToKey',
  'transforms.createKey.fields': 'id',
  'transforms.extractKey.type': 'org.apache.kafka.connect.transforms.ExtractField$Key',
  'transforms.extractKey.field': 'id',
  'mode': 'timestamp+incrementing',
  'incrementing.column.name': 'id',
  'timestamp.column.name': 'updated_at',
  'query': 'select * from `order`',
  'topic.prefix': 'prutcommerce_order',
  'topic.creation.groups': 'compacted',
  'topic.creation.default.partitions': 1,
  'topic.creation.default.replication.factor': 1,
  'topic.creation.compacted.include': 'prutcommerce_order',
  'topic.creation.compacted.cleanup.policy': 'compact',
  'topic.creation.compacted.retention.ms': 5000,
  'poll.interval.ms': 1000,
  'validate.non.null': false,
})

export const createOrderSource = async () => {
  const params = {
    name: 'melissa_order_source',
    config: makeConfig(),
    baseUrl: melissa.core.settings.getConnectUrl(),
  }

  await nephele.setupConnect.createConnector(params)
}
