import React, {
  useState,
  InputHTMLAttributes,
  ButtonHTMLAttributes,
  useCallback,
  useMemo,
  ChangeEvent,
  useRef,
} from 'react';

import { IPokemon } from '../../entities/Pokemon';

import { useTheme } from '../../hooks/theme';
import { useEffectOnlyOnce } from '../../hooks/effect';

import Button from '../Button';

import {
  Container,
  InputSearch,
  ResultOptions,
  ResultOption,
  Spacer,
  NotFoundOption,
} from './style';

interface AutocompleteItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  option: IPokemon;
}

const Option: React.FC<AutocompleteItemProps> = ({ option, onClick, ...rest }) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const { theme } = useTheme();

  const handleClick = useCallback(
    (e) => {
      if (onClick) {
        onClick(e);
      }
      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    },
    [onClick],
  );

  return (
    <ResultOption key={option.id} onClick={(e) => handleClick(e)} {...rest}>
      <img src={option.image} alt={option.name} />
      <strong>{option.name}</strong>
      <span>{option.formattedPrice}</span>
      <Spacer />

      {!isAdded ? (
        <div>
          <span className="add">Adicionar</span>
          <theme.icons.cart size={24} />
        </div>
      ) : (
        <div>
          <span className="add">Adicionado</span>
          <theme.icons.check size={24} />
        </div>
      )}
    </ResultOption>
  );
};

interface AutocompleteProps extends InputHTMLAttributes<HTMLInputElement> {
  options: IPokemon[];
  onChoose?(option: IPokemon): void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ options, onChoose, ...rest }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [term, setTerm] = useState<string>('');
  const [isOptionsOpened, setIsOptionsOpened] = useState<boolean>(false);
  const { theme } = useTheme();

  const handleOutsideClick = useCallback(
    (event) => {
      if (containerRef && !containerRef.current?.contains(event.target)) {
        setIsOptionsOpened(false);
      }
    },
    [setIsOptionsOpened],
  );

  useEffectOnlyOnce(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  const handleClick = useCallback(
    (option: IPokemon) => {
      if (onChoose) {
        onChoose(option);
      }
    },
    [onChoose],
  );

  const filteredOptions = useMemo(() => {
    return options.filter(
      (option) => option.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1,
    );
  }, [options, term]);

  return (
    <Container ref={containerRef} className="loading">
      <InputSearch>
        <input
          type="text"
          placeholder="Pesquise pokémon"
          value={term}
          onFocus={() => setIsOptionsOpened(true)}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTerm(e.currentTarget.value)}
          {...rest}
        />
        {term !== '' && (
          <Button textOnly iconOnly onClick={() => setTerm('')}>
            <theme.icons.close size={24} />
          </Button>
        )}
      </InputSearch>
      {isOptionsOpened && term !== '' && (
        <ResultOptions>
          <div>
            {filteredOptions.length ? (
              filteredOptions.map((option) => (
                <Option
                  key={option.id}
                  option={option}
                  onClick={() => handleClick(option)}
                />
              ))
            ) : (
              <NotFoundOption>
                <strong>Nenhum pokémon encontrado</strong>
              </NotFoundOption>
            )}
          </div>
        </ResultOptions>
      )}
    </Container>
  );
};

export default Autocomplete;
