export interface Server {
  IP: string;          // IP
  ID: string;          // Уникальный идентификатор (UUID)
  Title: string;       // Название сервера
  CPU: number;         // Количество ядер процессора
  Memory: number;      // Объем памяти в МБ
  Disk: number;        // Объем диска в МБ
}
